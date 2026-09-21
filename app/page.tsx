import WelcomeText from "@/components/WelcomeText";
import SupportPhone from "@/components/SupportPhone";
import { formatDuration } from "@/lib/formatDuration";
export default function Home(){
  return(
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <WelcomeText />
      <div className="mt-6 p-4 bg-gray-900 rounded-xl border border-gray-700">
        Mfano: {formatDuration(60)} na {formatDuration(120)}
      </div>
      <SupportPhone />
      <p className="mt-4 text-xs text-gray-500">KUBO SAWE WiFi - 0684767112</p>
    </div>
  );
}
