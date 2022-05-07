export default function Category({name}){
    return(
        <div className="category" style={{backgroundImage: 'url(https://cdn.dribbble.com/users/77598/screenshots/5919494/dribbble.png)'}}>
            <h3>
                {name}
            </h3>
            <style jsx>{`
                .category{
                    width: 100%;
                    height: 400px;
                    background-size: cover;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }
                .category h3{
                    z-index: 5;
                    text-align: center;
                    text-transform: uppercase;
                }
                .category:after{
                    content: "";
                    background: #203656;
                    display: block;
                    height: 100%;
                    left: 0;
                    opacity: 0.6;
                    top: 0;
                    position: absolute;
                    width: 100%;
                }
            `}</style>
        </div>
    );
}