import Card from "../components/Card";
import Header from "../components/Header";
import '../styles/Card.css'

function Home() {
    return (
        <>
            <Header />
            <h1>Titre</h1>
            <p>Lorem, ipsum.</p>
            <Card title="Carte 1"/>
            <Card title="Carte 2"/>
            <Card title="Carte 3"/>
            <Card title="Carte 4"/>
            <Card title="Carte 5"/>
        </>
    )
        
}
export default Home;
