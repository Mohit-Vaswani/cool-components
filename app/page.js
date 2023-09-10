import ItemList from "@/components/ItemList";
import Modal from "@/components/Modal";
import Toggle from "@/components/Toggle";

export default function Home() {
  return (
    <main className='flex justify-center items-center w-full h-screen flex-col gap-6'>
      <h1>Building New Components⚡</h1>
      {/* <ItemList/> */}
      {/* <Toggle/> */}
      <Modal/>
    </main>
  )
}
