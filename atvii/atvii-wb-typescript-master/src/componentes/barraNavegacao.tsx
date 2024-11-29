// Em BarraNavegacao.tsx
import { Component, ReactNode } from "react";

type Props = {
    tema: string,
    children: ReactNode
};

export default class BarraNavegacao extends Component<Props> {
    componentDidMount() {
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);
    }

    render() {
        return (
            <>
                <nav className={`${this.props.tema} nav-extended`}>
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo">WB</a>
                        <a href="#" data-target="mobile-menu" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {this.props.children}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu">
                    {this.props.children}
                </ul>
            </>
        );
    }
}
