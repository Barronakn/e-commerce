import Head from "@/Components/Head";
import Menu from "@/Components/Menu";
import Footer from "@/Components/Sections/Footer";
import React, { useState } from "react";
import WhatsAppBtn from "@/Components/WhatsAppBtn";
import Others from "@/Components/Sections/Others";
import Bannerier from "@/Components/Bannerier";
import Abonnement from "@/Components/Abonnement";

const SurMesure = ({items}) => {
    const [visible1, setVisible1] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const handleClick1 = () => {
        setVisible1(true)
        setVisible2(false)
        setVisible3(false)
        console.log(document.querySelector(".hours1"));
        document.querySelector(".hours1").classList.add("bg-gray-600")
        document.querySelector(".hours2").classList.remove("bg-gray-600")
        document.querySelector(".hours3").classList.remove("bg-gray-600")
        document.querySelector(".hours1").classList.add("text-white")
        document.querySelector(".hours2").classList.remove("text-white")
        document.querySelector(".hours3").classList.remove("text-white")
    }

    const handleClick2 = () => {
        setVisible2(true)
        setVisible1(false)
        setVisible3(false)
        document.querySelector(".hours2").classList.add("bg-gray-600")
        document.querySelector(".hours1").classList.remove("bg-gray-600")
        document.querySelector(".hours3").classList.remove("bg-gray-600")
        document.querySelector(".hours2").classList.add("text-white")
        document.querySelector(".hours1").classList.remove("text-white")
        document.querySelector(".hours3").classList.remove("text-white")
    }

    const handleClick3 = () => {
        setVisible3(true)
        setVisible2(false)
        setVisible1(false)
        document.querySelector(".hours3").classList.add("bg-gray-600")
        document.querySelector(".hours2").classList.remove("bg-gray-600")
        document.querySelector(".hours1").classList.remove("bg-gray-600")
        document.querySelector(".hours3").classList.add("text-white")
        document.querySelector(".hours2").classList.remove("text-white")
        document.querySelector(".hours1").classList.remove("text-white")
    }
    return (
        <div>
            <Head
                title="Casineuve Actions | +200 Modèles de Cv sur mesure à télécharger et à remplir"
                description="Découvrez notre univers dédié à l'excellence dans la rédaction de CV et de lettres de motivation. Chez Casineuve Actions, nous proposons des modèles de CV Word professionnels, esthétiques et personnalisables, conçus pour vous démarquer dans le monde professionnel. Notre équipe experte vous accompagne dans la rédaction de CV percutants qui mettent en avant votre parcours de manière claire et professionnelle. Que vous soyez étudiant, professionnel confirmé, ou en reconversion, nos services de montage de dossier vous garantissent une présentation impeccable auprès des recruteurs. Optimisez votre recherche d'emploi avec nos conseils spécialisés et nos modèles de CV téléchargeables. Casineuve Actions, c'est l'assurance d'un CV qui vous représente et qui séduit les employeurs. Rejoignez des milliers de candidats satisfaits et donnez un nouvel élan à votre carrière avec nos services de qualité."
                keywords="Casineuve Actions, Casineuve, CV Word, CV PowerPoint, Joli CV, CV 2024, CV 2023, CV Professionnel, CV Pro, CV Professionnel sur deux pages , CV Pro sur deux pages, Modèles de CV sur deux pages, Modèles de CV 2024, Modèles de CV 2023, Modèles de CV Pro, Modèles de CV, Créer un CV, CV attractif, CV design, CV original, Modèles CV gratuits, CV téléchargement gratuit, Conseils rédaction CV, CV réussi, CV moderne, CV efficace, Modèles de CV Word, Modèles de CV professionnels, Rédaction de CV, CV personnalisable, Lettres de motivation percutantes, Services de montage de dossier, CV esthétique et professionnel, Conseils pour rédiger un CV, CV téléchargeable, Modèles de CV pour tous métiers, CV impactant, curriculum vitae, Personnaliser son CV, Lettre de motivation, Rédiger lettre de motivation, Modèle lettre de motivation, Lettre de motivation professionnelle, Exemple lettre de motivation, Conseils lettre de motivation Cv sur mesure"
            />
            <Menu items={items} />
            <Bannerier />
            <section className="mx-10 md:mx-32 mt-32 mb-20 text-justify leading-8 flex flex-col gap-4">
                <div className="mb-8">
                    <h2 className="font-bold md:text-2xl text-xl">
                        Vous méritez de vivre votre rêve professionnel
                    </h2>
                    <p className="text-sm md:text-base">
                        Trouver les bons mots pour présenter votre parcours
                        professionnel n'est pas une tâche aisée. En effet, un CV
                        ne se rédige pas sur un bout de table entre midi et
                        deux, le baladeur MP3 sur les oreilles, avec une vague
                        idée de ce qu'on va mettre dedans. Mais, pris par le
                        tourbillon de la vie étudiante ou professionnelle,
                        plusieurs candidats sous-estiment l'importance de cet
                        exercice.
                    </p>
                    <p className="text-sm md:text-base">
                        Pourtant, les recruteurs, par expérience savent
                        reconnaître un CV bâclé la veille, juste avant une
                        partie de jeu en ligne. Et dans un monde où la première
                        impression compte plus que tout, cela peut compromettre
                        votre image professionnelle.
                    </p>
                </div>
                <div>
                    <h2 className="md:text-2xl text-xl font-bold">
                        Vous ne voudriez pas que votre sérieux et votre
                        détermination soient mis en doute dès le premier regard,
                        n'est-ce pas ?
                    </h2>
                    <p className="text-sm md:text-base">
                        Alors, lorsque vous nous confiez votre dossier de
                        candidature, vous bénéficiez de l'expérience de
                        professionnels aguerris dans le domaine du recrutement.
                        {" "}
                        <span className="font-bold">
                             Nos experts ont travaillé sur des milliers de CV,
                            analysé des centaines de parcours professionnels, et
                            collaboré étroitement avec des designers pour créer
                            des documents percutants et visuellement attractifs.
                        </span>
                    </p>
                    <p className="text-sm md:text-base">
                        Chaque détail de votre dossier est soigneusement
                        examiné, chaque élément est optimisé pour mettre en
                        valeur votre profil et susciter l'intérêt des
                        recruteurs. Nous comprenons l'importance de chaque mot,
                        de chaque présentation visuelle, et nous mettons tout en
                        œuvre pour vous aider à vous démarquer dans un marché du
                        travail compétitif.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex flex-row justify-center w-40 mx-auto my-0 gap-2 rounded-lg p-1 border-2 border-gray-600 bg-white">
                    <div onClick={handleClick1} className="hours1 cursor-pointer hover:text-white hover:bg-gray-600 rounded-lg p-1 border-2 border-gray-600 bg-gray-600 text-white">72H</div>
                    <div onClick={handleClick2} className="hours2 cursor-pointer hover:text-white hover:bg-gray-600 rounded-lg p-1 border-2 border-gray-600">48H</div>
                    <div onClick={handleClick3} className="hours3 cursor-pointer hover:text-white hover:bg-gray-600 rounded-lg p-1 border-2 border-gray-600">24H</div>
                </div>
                {visible1 && <Abonnement price1="30€" price2="45€" price3="95€" />}
                {visible2 && <Abonnement price1="35€" price2="50€" price3="110€" />}
                {visible3 && <Abonnement price1="40€" price2="55€" price3="120€" />}
            </section>

            <section className="mt-20">
                <Others />
            </section>

            <section>
                <Footer />
            </section>
            <WhatsAppBtn />
        </div>
    );
};

export default SurMesure;
