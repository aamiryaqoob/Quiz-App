import HeaderLogo from '../assets/quiz-logo.png';

export default function Header() {
    return (<header>
        <img src={HeaderLogo} alt="Logo" />
        <h1>React Quiz</h1>
    </header>
    )
}