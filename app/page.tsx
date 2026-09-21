export const dynamic = 'force-dynamic';
import SupportPhone from "@/components/SupportPhone";

export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'black', color:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <h1 style={{fontSize:'24px', fontWeight:'bold', color:'#22d3ee'}}>KUBO SAWE WIFI</h1>
      <p style={{marginTop:'12px', color:'#aaa'}}>Karibu kwenye mtandao bora</p>
      <SupportPhone />
      <p style={{marginTop:'16px', fontSize:'12px', color:'#666'}}>Piga: 0684767112</p>
    </div>
  );
}
