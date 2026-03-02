"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
    user: User | null;
    session: Session | null;
    isLoaded: boolean;
    signInWithPassword: (email: string, password: string) => Promise<{ data: any; error: any }>;
    signUp: (email: string, password: string, name: string) => Promise<{ data: any; error: any }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Fetch initial session
        const getSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error fetching session:", error);
            }
            setSession(session);
            setUser(session?.user || null);
            setIsLoaded(true);
        };
        getSession();

        // Listen for internal Auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                setUser(session?.user || null);
                setIsLoaded(true);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const signInWithPassword = async (email: string, password: string) => {
        return supabase.auth.signInWithPassword({ email, password });
    };

    const signUp = async (email: string, password: string, name: string) => {
        return supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                },
            },
        });
    };

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider value={{ user, session, isLoaded, signInWithPassword, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
