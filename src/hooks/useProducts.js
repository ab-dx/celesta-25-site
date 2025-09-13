"use client";
import { useEffect, useState } from "react";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { auth } from "@/lib/firebase";

const db = getFirestore();

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setProducts([]);
      setLoading(false);
      return;
    }

    // Query tickets where uid == user.uid
    const q = query(collection(db, "products"));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(docs);
      setLoading(false);
    });

    // Cleanup listener on unmount or when user changes
    return () => unsubscribe();
  }, [auth.currentUser?.uid]);

  return { products, loading };
}

