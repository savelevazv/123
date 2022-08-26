import React from "react";

const cardsInfo = [
    {
        date: 'до 12.11.2022',
        title: <p>Кэшбэк<br />до 33%</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>до<strong> -25%</strong><br />на товары <br />для дома</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новая коллекция Timberland</p>
    },
    {
        date: 'до 12.11.2022',
        title: <p>Новые привелегии клуба</p>
    }

]

export const Stocks = () => {
    return (
        <div className="stocks--container">
            <h2 className="title--stocks font-style36">Акции</h2>
            <div className="stocks--cards--container">
                {cardsInfo.map((item) => {
                    return (
                        <div className="promotial--card">
                            <p className="font-style20">{item.date}</p>
                            <h3 className="primotal--card--title font-style36">{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}