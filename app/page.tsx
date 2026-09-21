"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import WelcomeText from "@/components/WelcomeText";
import SupportPhone from "@/components/SupportPhone";
import { formatDuration } from "@/lib/formatDuration";

type Package = { 
  id: number; 
  name: string; 
  duration_minutes: number; 
  price: number; 
  description?: string;
  download_speed?: number;
  upload_speed?: number;
  data_limit?: number;
};

const NETWORKS = [
  { id: "mpesa", name: "M-Pesa", color: "bg-red-600", icon: "📱" },
  { id: "tigopesa", name: "Tigo Pesa", color: "bg-blue-600", icon: "📱" },
  { id: "airtelmoney", name: "Airtel Money", color: "bg-red-500", icon: "📱" },
  { id: "halopesa", name: "Halo Pesa", color: "bg-orange-500", icon: "📱" },
];

export default function Home(){
  const [packages,setPackages]=useState<Package[]>([]);
  const [voucher,setVoucher]=useState("");
  const [loading,setLoading]=useState(true);
  const [msg,setMsg]=useState("");
  const [activeVoucher,setActiveVoucher]=useState<string | null>(null);
  
  // BUY MODAL STATE - Kama V2
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(()=>{
    async function load(){
      try{
        const {data} = await supabase.from("packages").select("*").order("price", {ascending:true});
        if(data && data.length > 0){
          setPackages(data);
        } else {
          setPackages([
            {id:1,name:"Masaa 20 - BILA KIKOMO",duration_minutes:1140,price:500,description:"19 hours • Min: 8 hours", download_speed: 10240, upload_speed: 5120, data_limit: 0},
            {id:2,name:"Masaa 24 - BILA KIKOMO",duration_minutes:1440,price:700,description:"24 hours", download_speed: 10240, upload_speed: 5120, data_limit: 0},
            {id:3,name:"Masaa 38 - BILA KIKOMO",duration_minutes:2280,price:1000,description:"38 hours", download_speed: 10240, upload_speed: 5120, data_limit: 0},
            {id:4,name:"Masaa 52 - BILA KIKOMO",duration_minutes:3120,price:1500,description:"52 hours", download_speed: 15360, upload_speed: 7680, data_limit: 0},
            {id:5,name:"Masaa 168 - BILA KIKOMO",duration_minutes:10080,price:4000,description:"Wiki 1", download_speed: 20480, upload_speed: 10240, data_limit: 0},
            {id:6,name:"Masaa 720 - BILA KIKOMO",duration_minutes:43200,price:14000,description:"Mwezi 1", download_speed: 20480, upload_speed: 10240, data_limit: 0},
          ]);
        }
      }catch(e){ console.log(e); }
      setLoading(false);
      const saved = localStorage.getItem("kubo_voucher");
      if(saved) setActiveVoucher(saved);
    }
    load();
  },[]);

  const handleVoucherLogin = async () => {
    if(!voucher.trim()){ setMsg("Weka Voucher Code kwanza!"); return; }
    setMsg("Inaangalia voucher...");
    try{
      const {data, error} = await supabase.from("vouchers").select("*").eq("code", voucher.trim()).eq("is_used", false).single();
      if(error ||!data){
        setMsg("Voucher si sahihi au imeshatumika!");
      }else{
        localStorage.setItem("kubo_voucher", voucher.trim());
        setActiveVoucher(voucher.trim());
        setMsg("✅ Voucher sahihi! Umeunganishwa!");
      }
    }catch(err){
      localStorage.setItem("kubo_voucher", voucher.trim());
      setActiveVoucher(voucher.trim());
      setMsg("✅ Umeunganishwa! (Demo mode)");
    }
  };

  const openBuyModal = (pkg: Package) => {
    setSelectedPkg(pkg);
    setSelectedNetwork("");
    setPhoneNumber("");
    setShowBuyModal(true);
  };

  const handleConfirmBuy = () => {
    if(!selectedNetwork){ alert("Chagua Mtandao Kwanza!"); return; }
    if(!phoneNumber || phoneNumber.length < 9){ alert("Weka Namba Sahihi ya Simu!"); return; }
    
    const message = `Habari KUBO SAWE WiFi,%0A%0ANataka kununua:%0A📦 Kifurushi: ${selectedPkg?.name}%0A⏱ Muda: ${formatDuration(selectedPkg?.duration_minutes || 0)}%0A💰 Bei: TSH ${selectedPkg?.price?.toLocaleString()}%0A📱 Mtandao: ${NETWORKS.find(n=>n.id===selectedNetwork)?.name}%0A📞 Namba yangu: ${phoneNumber}%0A%0ANaomba maelekezo ya malipo.`;
    const whatsappUrl = `https://wa.me/255684767112?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setShowBuyModal(false);
  };

  return(
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center p-4">
      {/* HEADER KAMA V2 - NA NAMBA JUU */}
      <div className="w-full max-w-md mt-2 p-4 bg-black rounded-2xl border border-yellow-500/20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-black text-black">K</div>
          <div>
            <h1 className="font-black text-sm tracking-widest">KUBO SAWE WiFi</h1>
            <p className="text-[10px] text-yellow-400">FAST • RELIABLE • AFFORDABLE</p>
          </div>
        </div>
        <a href="/admin" className="text-[10px] bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">ADMIN</a>
      </div>

      {/* NAMBA YAKO JUU - MTU AKIINGIA ANAIONA MARA MOJA */}
      <div className="w-full max-w-md mt-3 p-3 bg-[#141414] border border-yellow-500/30 rounded-xl flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-xs">📞</span>
          <div>
            <p className="text-[10px] text-gray-400">Msaada wa Haraka - Piga Sasa</p>
            <p className="text-xs font-bold text-white">Bonyeza kupiga moja kwa moja</p>
          </div>
        </div>
        <a href="tel:0684767112" className="px-4 py-2 bg-yellow-400 text-black rounded-full font-black text-xs animate-pulse">
          0684 767 112
        </a>
      </div>

      <div className="w-full max-w-md mt-6 text-center">
        <WelcomeText/>
        <p className="text-gray-400 text-xs mt-2">Karibu KUBO SAWE - Chagua kifurushi uendelee mtandaoni</p>
      </div>

      {activeVoucher && (
        <div className="w-full max-w-md mt-6 p-5 bg-green-900/20 border border-green-500/30 rounded-2xl">
          <p className="text-green-400 font-bold text-sm">✅ Umeunganishwa</p>
          <p className="text-xs text-gray-300 mt-1">Voucher: <span className="font-mono font-bold">{activeVoucher}</span></p>
        </div>
      )}

      <div className="w-full max-w-md mt-6 p-5 bg-[#141414] rounded-2xl border border-gray-800">
        <h2 className="font-bold text-sm mb-1">🔑 Una Voucher?</h2>
        <div className="flex gap-2">
          <input value={voucher} onChange={e=>setVoucher(e.target.value.toUpperCase())} placeholder="MFANO: KUBO-1234" className="flex-1 px-4 py-3.5 rounded-xl bg-black border border-gray-700 text-white text-sm outline-none focus:border-yellow-500 font-mono tracking-widest"/>
          <button onClick={handleVoucherLogin} className="px-6 py-3.5 bg-yellow-400 text-black rounded-xl font-black text-sm">INGIA</button>
        </div>
        {msg && <p className="text-xs mt-3 p-2 bg-black rounded-lg text-center text-yellow-400">{msg}</p>}
      </div>

      <div className="w-full max-w-md mt-4">
        <h2 className="font-bold mb-3">📦 Vifurushi - BILA KIKOMO</h2>
        {loading? <p className="text-center py-10 text-gray-500">Inapakia...</p> : (
          <div className="grid gap-3">
            {packages.map(pkg=>(
              <div key={pkg.id} className="p-4 bg-[#141414] rounded-2xl border border-gray-800 hover:border-yellow-500/30 transition-all">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-bold text-sm text-yellow-400">{pkg.name}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{pkg.description}</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-[11px] text-gray-500">⏱ Muda: {formatDuration(pkg.duration_minutes)} ({pkg.duration_minutes} min)</p>
                      {pkg.download_speed && <p className="text-[11px] text-gray-500">📥 Download: {Math.round(pkg.download_speed/1024)} Mbps • 📤 Upload: {Math.round((pkg.upload_speed||0)/1024)} Mbps</p>}
                      <p className="text-[11px] text-gray-500">📦 Data: {pkg.data_limit ? pkg.data_limit + ' MB' : 'Bila Kikomo (Unlimited)'}</p>
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    <p className="font-black text-green-400 text-[16px]">TSH {pkg.price.toLocaleString()}</p>
                    <button onClick={()=>openBuyModal(pkg)} className="mt-2 px-6 py-2.5 bg-white text-black rounded-full text-xs font-black hover:bg-yellow-400 transition-colors">NUNUA</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full max-w-md mt-8 mb-10 text-center">
        <SupportPhone/>
        <p className="text-xs mt-2">📞 Piga simu kwa msaada</p>
        <a href="tel:0684767112" className="text-yellow-400 font-bold text-sm underline">0684767112</a>
        <p className="text-[10px] mt-1 text-gray-400">Bonyeza kupiga moja kwa moja</p>
        <p className="mt-4 text-[10px] text-gray-600">© 2025 KUBO SAWE WiFi • 0684767112</p>
      </div>

      {/* MODAL YA KUNUNUA KAMA V2 - MTANDAO + NAMBA */}
      {showBuyModal && selectedPkg && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-md bg-[#1a1a1a] rounded-2xl border border-gray-700 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-black text-sm">Nunua {selectedPkg.name}</h3>
              <button onClick={()=>setShowBuyModal(false)} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">✕</button>
            </div>
            
            <div className="bg-black p-3 rounded-xl mb-4 border border-gray-800">
              <p className="text-xs text-gray-400">Kifurushi: <span className="text-white font-bold">{selectedPkg.name}</span></p>
              <p className="text-xs text-gray-400">Bei: <span className="text-green-400 font-bold">TSH {selectedPkg.price.toLocaleString()}</span></p>
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold mb-2">1. Chagua Mtandao wa Malipo:</p>
              <div className="grid grid-cols-2 gap-2">
                {NETWORKS.map(net=>(
                  <button 
                    key={net.id}
                    onClick={()=>setSelectedNetwork(net.id)}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${selectedNetwork===net.id ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-[#141414] border-gray-700 text-white'}`}
                  >
                    <span>{net.icon}</span> {net.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="text-xs font-bold mb-2">2. Andika Namba Yako ya Simu:</p>
              <input 
                type="tel"
                value={phoneNumber}
                onChange={e=>setPhoneNumber(e.target.value)}
                placeholder="Mfano: 0684767112"
                className="w-full px-4 py-3.5 rounded-xl bg-black border border-gray-700 text-white text-sm outline-none focus:border-yellow-500"
              />
              <p className="text-[10px] text-gray-500 mt-1">Hakikisha namba ni sahihi - Ndiyo tutakayotumia kukutumia Voucher</p>
            </div>

            <div className="flex gap-2">
              <button onClick={()=>setShowBuyModal(false)} className="flex-1 py-3.5 bg-gray-800 rounded-xl text-sm font-bold">Ghairi</button>
              <button onClick={handleConfirmBuy} className="flex-1 py-3.5 bg-green-500 text-black rounded-xl text-sm font-black">Lipia Sasa - WhatsApp</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

