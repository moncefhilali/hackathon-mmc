import Header from "../Header"
import Footer from "../Footer"

export default function AboutusComp() {
  return (
    <>
    <Header></Header>
    <div className="my-9 px-8 py-4">
        <h1 className="text-center my-3 font-extrabold text-[60px]">Morocco Microsoft Community</h1>
        <div className="bg2 h-[500px] text-[27px] font-medium flex justify-center items-center">
            <p>A community embodies a diverse collective of individuals bound by shared interests, values, experiences, or geographical proximity. It serves as a social tapestry, weaving together the multifaceted threads of human interaction and connection. Within this intricate network, members form bonds that transcend mere proximity, fostering a profound sense of belonging
Communities often serve as nurturing grounds for the cultivation of relationships, where individuals find not just companionship but also support, guidance, and a shared identity. This sense of unity cultivates a framework for cooperation and collaboration, driving collective efforts towards common goals and the betterment of the community as a whole.

</p>
        </div>
    </div>
    <Footer></Footer>
      
    </>
  )
}
