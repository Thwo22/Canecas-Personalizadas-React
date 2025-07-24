import styles from "../css_routes/tutorial.module.css"

function tutorial_route() {
    return(
        <div className={styles.continer_geral}>

            <div className={styles.title}>
                <h1>Ficou Interessado?</h1>
                <h2>Saiba Como Pedir o Seu!</h2>
            </div>
            <div className={styles.passoApasso}>
                <h1>1. Escolha o Produto</h1>
                <p>Acesse o site, veja os modelos disponíveis e <strong>clique no produto que você gostou e quer personalizar!</strong></p>

                <h1>2. Fale Conosco Pelo Whatsapp</h1>
                <p>Você será redirecionado automaticamente para uma conversa no <strong>WhatsApp</strong> conosco!</p>

                <h1>Personalize do Seu Jeito!</h1>
                <p>Nos diga tudo que precisamos saber para <strong>tornar sua ideia em Realidade!</strong></p>
                <ul>
                    <li>Foto ou Imagem Desejada</li>
                    <li>Texto (frase, nome, data, etc...)</li>
                    <li>Cores Primárias</li>
                    <li>Qualquer outro Detalhs importante, que iremos ajustar com carinho!</li>
                </ul>

                <h1>4. Personalize do Seu Jeito!</h1>
                <p>Após definir todos os detalhes e confirmar sua arte, Enviaremos as <strong>Opções de Pagamento.</strong></p>

                <h1>5. Produção  e Envio</h1>
                <p>Assim que o pagamento for confirmado, iniciamos a produção. Você pode escolher:</p>
                <ul>
                    <li>Receber em Casa (envio pelo Uber Entregas)</li>
                    <li>Retirar Pessoalmente (em Local Combinado)</li>
                </ul>

                <h1>6. Prontinho!</h1>
                <p>Seu produto será entregue, do jeitinho que você imaginou!</p>
            </div>

        </div>
    )
}

export default tutorial_route;