'use client'
import { sendUTXO } from "@/util/UTXO";
import Image from "next/image";
import Swal from 'sweetalert2'


const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={sendUTXO}>Send UTXO</button>
    </main >
  );
}

export default Home
