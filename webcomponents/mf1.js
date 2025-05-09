class MF1Component extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <div>
                <h2>Microfrontend 1</h2>
                <p>Conteúdo do MF1</p>
                <div id="mensagens-mf1"></div>
            </div>
        `;

        this.addEventListener("mensagem-enviada", (event) => {
            this.receberMensagem(event.detail.mensagem);
        });
    }

    receberMensagem(mensagem) {
        const mensagensDiv = this.shadowRoot.getElementById("mensagens-mf1");
        const novaMensagem = document.createElement("p");
        novaMensagem.textContent = "Recebido: " + mensagem;
        mensagensDiv.appendChild(novaMensagem);

        this.enviarMensagemParaContainer(mensagem);
    }

    enviarMensagemParaContainer(mensagem) {
        const evento = new CustomEvent("mensagem-recebida", {
            detail: { origem: "MF1", mensagem }
        });
        document.dispatchEvent(evento);
    }
}

customElements.define("mf1-component", MF1Component);
