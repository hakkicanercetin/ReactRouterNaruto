export function Home()
{
    return (
        <>
            <div className="content">
                <h1 className="anim">What is Naruto?</h1>
                <p className="anim">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells  the story of Naruto Uzumaki,
                a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
                <a href="/characters" className="btn anim">Characters Page →</a>
            </div>
            <img src="naruto.png" className="feature-img anim" />
        </>
    )
}