

function shopCartEmpty({onTrashClick,title,url,text}) {
    return (
        <div className="cart-empty" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center" ,
            justifyContent: "center",
            height: "100%",
            
        }}>
            <img src={url} style={{
                width: "120px",
                height: "120px"
            }}></img>
            <h2 style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "27px",
                color: "#000000",

            }}>{title}</h2>
            <p style={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                opacity: "0.4",
                textAlign: "center"   

            }}>{text}</p>
            <button onClick={onTrashClick} className="overlay__checkout overlay__checkout_reverse"><img src='img/content/icon/arrow-reverse.svg' ></img> Вернуться назад
        </button>
        </div>
    )
}

export default shopCartEmpty