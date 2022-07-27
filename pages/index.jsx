import wePhoto from '../public/images/we.jpg';
import Image from 'next/image';
import Title from '../components/Title'
export default function Home() {
  return (
    <div className="m-auto max-w-xs grid place-items-center">
      <Title text="POLINS FAMILY" />
      <Image className='' src={wePhoto} alt="We 🤍" />
    </div>
  )
}