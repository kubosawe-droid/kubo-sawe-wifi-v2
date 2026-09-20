"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WelcomeText() {
  const [text, setText] = useState("Karibu KUBO SAWE WiFi");
  
  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("settings").select("welcome_text").eq("id",1).single();
      if (data?.welcome_text) setText(data.welcome_text);
    }
    load();
    
    const channel = supabase.channel("settings").on("postgres_changes", {event:"*", schema:"public", table:"settings"}, (payload:any)=>{
      if (payload.new?.welcome_text) setText(payload.new.welcome_text);
    }).subscribe();
    
    return ()=>{ supabase.removeChannel(channel); }
  }, []);
  
  return <h1 className="text-2xl font-bold text-white text-center">{text}</h1>;
}
