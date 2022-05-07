import Head from "next/head"


export default function Card({ item }) {
    return (
        <div>
            <Head>
                <script src="https://kit.fontawesome.com/b894d6dbb9.js"></script>
            </Head>
            <div className="post">
                <div className="thumb">
                    <a href="#"><img src={item.img_url} /></a>
                </div>
                <div className="details">
                    <div className="cat-date">
                        <ul>
                            <li>Yazı</li>
                            <li>{item.date.toString().replace('-', '/').split('T')[0].replace('-', '/')}</li>
                        </ul>
                    </div>
                    <div className="title">
                        <h4 dangerouslySetInnerHTML={{__html: item.title.rendered}}></h4>
                    </div>
                    <div className="content">
                        <p dangerouslySetInnerHTML={{__html: item.excerpt.rendered.replace(/[<p></p>]/g, '')}}>
                        </p>
                    </div>
                </div>
                <div className="share">
                    <div>
                        <a href="#"><i className="fa-solid fa-share-nodes"></i></a>
                        <a href="#"><i className="fa-solid fa-ellipsis"></i></a>
                    </div>
                </div>
                <style jsx>{`
                .post{
                    border: 1px solid #EBEBEB;
                }
                .cat-date ul{
                    font-size: 12px;
                    color: #9faabb;
                    list-style: none;
                    padding: 0; 
                }
                .cat-date ul li{
                    display: inline-block;
                }
                .cat-date ul li:first-child{
                    margin-right: 0.8rem;
                }
                .cat-date ul li:first-child:after{
                    content: "";
                    display: inline-block;
                    background-color: #a80f1a;
                    border-radius: 50%;
                    margin-left: 1rem;
                    height: 3px;
                    vertical-align: middle;
                    position: relative;
                    top: -1px;
                    width: 3px;
                }
                .thumb{
                    overflow: hidden;
                    height: auto;
                    position: relative;
                    max-height: 175px;
                    cursor: pointer;
                }
                .thumb img{
                    width: 100%;
                    height: 175px;
                    object-fit: cover;
                    transition: all 0.3s ease-in-out;
                }
                .thumb:hover img{
                    transform: scale(1.05);
                    opacity: 0.8;
                    transition: all 0.3s ease-in-out;
                }
                .details{
                    padding: 10px;
                }
                .title h4{
                    line-height: 1.5em;
                    height: 3em;
                    margin: 0;
                }
                .content p{
                    line-height: 1.5em;
                    height: 3em;
                    font-weight: 500;
                    font-size: 14px;
                    overflow: hidden;
                }
                .share div{
                    border-top: 1px solid #9faabb67;
                    margin: 0 10px;
                    padding: 10px 0;
                    display: flex;
                    justify-content: space-between;
                }
                .share a{
                    color: #9faabb;
                }
            `}</style>
            </div>
        </div>

    )
}