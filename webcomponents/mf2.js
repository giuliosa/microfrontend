class MF2Component extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <div>
                <h2>Microfrontend 2</h2>
                <p>Conteúdo do MF2</p>
                <div id="mensagens-mf2"></div>
            </div>
        `;

        this.addEventListener("mensagem-enviada", (event) => {
            this.receberMensagem(event.detail.mensagem);
        });
    }

    receberMensagem(mensagem) {
        const mensagensDiv = this.shadowRoot.getElementById("mensagens-mf2");
        const novaMensagem = document.createElement("p");
        novaMensagem.textContent = "Recebido: " + mensagem;
        mensagensDiv.appendChild(novaMensagem);

        this.enviarMensagemParaContainer(mensagem);
    }

    enviarMensagemParaContainer(mensagem) {
        const evento = new CustomEvent("mensagem-recebida", {
            detail: { origem: "MF2", mensagem }
        });
        document.dispatchEvent(evento);
    }
}

customElements.define("mf2-component", MF2Component);
