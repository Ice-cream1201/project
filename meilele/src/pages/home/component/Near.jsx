import React, { Component } from 'react'
import '../../../assets/css/home/near.css'

export default class Near extends Component {
    render() {
        return (
            <div className="near">
                <div className="close">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAG3RSTlMAzBGrxbEEURkIpoa9oZ57X1QsJkeDNiI3G0jHvFpGAAABI0lEQVQ4y42U3bKDIAyEsxBAwP/Was/7P+iZ1mpEbHVvHJ0Pk2xIaKuiG0LJXIahK+hY9xob1XfK9dAAR9cra1XvIgP6QalsAxjn5YN3BmjsllEVuLW7cy2jUhtGw9wo081Ar5Sv5heRHK6WFBoYYVLKoPnUBZZY+4iMuUaNlr6qhX57CGO/Q9bg5WoNRz/kUBMVYC/NU0vGa+8840kdojBGq0/tZqUiOhrgtr5otTwl3kABPaVUylCPQCUUpdSYMKRQEsPuOoG0SRa8h2gEMFIKSbjsTxJOEs9yksTFgqw6sUDMzH0SM59gf+y4tEUanPVOGnztqpxfuivXd7oyCDJS4XikAip/dTjPx1zkfy0M0ZSvnul8if3RsYouzuswpuvwH9bICyZ+RM6BAAAAAElFTkSuQmCC" alt=""/>
                </div>
                <p className="text">查找最近的门店</p>
                <div className="nearSearch">搜索</div>
            </div>
        )
    }
}
