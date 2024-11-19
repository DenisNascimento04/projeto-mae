import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .background{
        position: absolute;
        width: 100%;
        height: 150%;
        background: linear-gradient(108deg, #FF007F 0%, #EC41EC 100%);
        animation: back 1s linear;
    }
    .background img{
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    @keyframes back{
        0%{transform: translateY(-1500px)}
        100%{transform: translateY(0)}
    }
    .next{
        background-color: #000;
        width: 60px;
        height: 60px;
        top: 40%;
        right: -10%;
        border: 0;
        position: absolute;
        border-radius: 50%;
        transition: .5s;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 999;
    }
    .next.on{
        transform: translateX(-300px);
    }
    .home.on{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        button{
            width: 250px;
            border: 0;
            cursor: pointer;
            background-color: transparent;
        }
        button img{
            width: 100%;
            height: 100%;
            animation: pulse 1s infinite;
        }
        p{
            color: #000000;
            font-size: 3.2rem;
        }
        @keyframes pulse {
            0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
            50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05);
            }
            100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
            }
        } 
    }
    .home.off{
        display: none;
        opacity: 0;
        transition: 1s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        gap: 1rem;
        button{
            width: 250px;
            border: 0;
            cursor: pointer;
        }
        button img{
            width: 100%;
            height: 100%;
            animation: pulse 1s infinite;
        }
        p{
            color: #000000;
            font-size: 3.2rem;
        }
    }
    
    .parte-1.on{
        display: block;
        position: absolute;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        transition: 1s;
        transition-delay: 1s;
        bottom: 0;
        img.hearts-img{
            transition: 1s;
            /* position: absolute; */
            transition-delay: .5s;
            width: 10rem;
            /* object-fit: contain; */
        }
        .mensagens{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2rem 1.4rem 2rem 1.4rem;
            background-color: #fff;
            box-shadow: 5px 7px 4px 0px rgba(0, 0, 0, 0.25);
            margin-top: -15rem;
            transition: 0;
            scale: 1;
            animation: swing .3s;
            /* animation-delay: .2s; */
            scale: 0;
        }
        .mensagens.on{
            scale: 1;
            .imgs{
                display: flex;
                gap: 1rem;
            }
            .imgs img{
                width: 100%;
                height: 270px;
                object-fit: cover;
            }
            p{
                color: #000;
                font-size: 2rem;
                width: 100%;
                text-align: center;
            }
            &.troca{
                animation: bugug 1s ease;
            }
        }
        .hearts{
            display: flex;
            position: absolute;
            transition: 1s;
            ul{
                display: flex;
                gap: 4rem;
            }
        
            &.anime .flip-container{
                width: 100px;
                height: 100px;
                
                transition: .5s;
                cursor: pointer;
                animation: slideUp 1.5s ease-in;
            }
            &.anime .flip-container:hover{
                transform: scale(1.3);
            }
            &.anime .flip-container:nth-child(1){
                animation-delay: .5s ;
            }
            &.anime .flip-container:nth-child(2){
                animation-delay: .7s ;
            }
            &.anime .flip-container:nth-child(3){
                animation-delay: .9s ;
            }
            &.anime .flip-container:nth-child(4){
                animation-delay: 1s ;
            }
        }

        @keyframes swing {
            20% {
            -webkit-transform: rotate3d(0, 0, 1, 15deg);
            transform: rotate3d(0, 0, 1, 15deg);
            }
            40% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
            }
            60% {
            -webkit-transform: rotate3d(0, 0, 1, 5deg);
            transform: rotate3d(0, 0, 1, 5deg);
            }
            80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
            }
            100% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
            }
        }
        .hearts.on{
            transform: translateY(200px);
        }
        @keyframes slideUp {
            0%{
                transform: translateY(400px);
            }
            100%{
                transform: translateY(0);
            }
        }
        @keyframes bugug {
            0%{
                transform: translateY(0);
            }
            50%{
                transform: translateY(-700px);
            }
            100%{
                transform: translateY(0);
            }
        }
    }
    .parte-1.off{
        opacity: 0;
        /* display: none; */
        position: absolute;
        bottom: -1000px;
    }

    .parte-2.on{
        position: absolute;
        top: 0;
        /* background-color: blue; */
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        opacity: 1;
        /* transition: 1s; */
        .pt1, .pt2{
            position: absolute;
            padding: 0 25%;
        }
        .pt1, .pt2 p{
            font-size: 3.2rem;
            text-align: center;
        }
        .pt1{
            opacity: 0;
            transition: .5s;
        }
        .pt1.on{
            opacity: 1;
        }
        .pt1 h1{
            font-size: 6rem;
            margin-bottom: 4rem;
        }
        .pt2{
            opacity: 0;
            transition: .5s;
        }
        .pt2.on{
            opacity: 1;
        }
        .pt-final.on{
            flex: 3;
            display: flex;
            height: 100%;
            opacity: 1;
            transition: .2s;
            .left, .mid, .right{
                flex: 1;
            }
            .left{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .foto:nth-child(1){
                    margin-left: -40rem;
                    transform: rotate(15deg);
                } 
                .foto.on:nth-child(1){
                    margin-left: 0;
                    transform: rotate(15deg);
                    /* transition: 5s; */
                }
    
                .foto:nth-child(2){
                    margin-left: -40rem;
                    transform: rotate(7deg);
                    transition-delay: .4s;
                }
                .foto.on:nth-child(2){
                    margin-left: 0;
                    transform: rotate(7deg);
                }
    
                .foto:nth-child(3){
                    margin-left: -40rem;
                    transform: rotate(-11deg);
                }
                .foto.on:nth-child(3){
                    margin-left: 0;
                    transform: rotate(-11deg);
                    transition-delay: .6s;
                }
            }
            .right{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .foto:nth-child(1){
                    margin-left: 120%;
                    transform: rotate(-15deg);
                }
                .foto.on:nth-child(1){
                    margin-left: 43%;
                    transform: rotate(-15deg);
                }
    
                .foto:nth-child(2){
                    margin-left: 120%;
                    transform: rotate(-7deg);
                }
                .foto.on:nth-child(2){
                    margin-left: 43%;
                    transform: rotate(-7deg);
                    transition-delay: .4s;
                }
    
                .foto:nth-child(3){
                    margin-left: 120%;
                    transform: rotate(11deg);
                }
                .foto.on:nth-child(3){
                    margin-left: 43%;
                    transform: rotate(11deg);
                    transition-delay: .6s;
                }
            }


            .mid{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-top: -200%;
                transition: 1s;
            }
            .mid.on{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                transition: 1s;
                margin-top: 0;
                .foto:nth-child(1){
                }
                .foto:nth-child(2) img{
                    height: 24rem;
                }
            }
            .foto{
                display: flex;
                width: 24rem;
                flex-direction: column;
                gap: 2rem;
                padding: 2rem 1.4rem 3rem 1.4rem;
                background-color: #fff;
                box-shadow: 5px 7px 4px 0px rgba(0, 0, 0, 0.25);
                transition: 1s;
                transition-delay: .5s;
            }
            .foto img{
                width: 100%;
                height: 16rem;
                object-fit: cover;
            }
        }
        .pt-final{
            opacity: 0;
            flex: 3;
            display: flex;
            height: 100%;
            /* opacity: 1; */
            /* transition: 1s; */
            .left{

                .foto:nth-child(1){
                    margin-left: -40rem;
                    transform: rotate(15deg);
                    transition: 1s;
                } 
                .foto.on:nth-child(1){
                    margin-left: 0;
                    transform: rotate(15deg);
                    /* transition: 5s; */
                }
    
                .foto:nth-child(2){
                    margin-left: -40rem;
                    transform: rotate(7deg);
                    transition-delay: .4s;
                }
                .foto.on:nth-child(2){
                    margin-left: 0;
                    transform: rotate(7deg);
                }
    
                .foto:nth-child(3){
                    margin-left: -40rem;
                    transform: rotate(-11deg);
                }
                .foto.on:nth-child(3){
                    margin-left: 0;
                    transform: rotate(-11deg);
                    transition-delay: .6s;
                }
            }
            .right{
                .foto:nth-child(1){
                    margin-left: 120%;
                    transform: rotate(-15deg);
                }
                .foto.on:nth-child(1){
                    margin-left: 43%;
                    transform: rotate(-15deg);
                }
    
                .foto:nth-child(2){
                    margin-left: 120%;
                    transform: rotate(-7deg);
                }
                .foto.on:nth-child(2){
                    margin-left: 43%;
                    transform: rotate(-7deg);
                    transition-delay: .4s;
                }
    
                .foto:nth-child(3){
                    margin-left: 120%;
                    transform: rotate(11deg);
                }
                .foto.on:nth-child(3){
                    margin-left: 43%;
                    transform: rotate(11deg);
                    transition-delay: .6s;
                }
            }

            .mid{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-top: -200%;
                transition: 1s;
            }
            .mid.on{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                transition: 1s;
                margin-top: 0;
            }
            .mid.on .foto:nth-child(1){
            }
            .mid.on .foto:nth-child(2){
                /* height: 200px; */
            }
            .mid.on .foto:nth-child(2) img{
                height: 100%;
            }
            .foto{
                display: flex;
                width: 230px;
                flex-direction: column;
                gap: 2rem;
                padding: 2rem 1.4rem 3rem 1.4rem;
                background-color: #fff;
                box-shadow: 5px 7px 4px 0px rgba(0, 0, 0, 0.25);
                transition: 1s;
            }
            .foto img{
                width: 100%;
                height: 150px;
                object-fit: cover;
            }
            
            
        }
    }
    .parte-2.off{
        display: none;
        opacity: 1;
        .pt1, .pt2{
            position: absolute;
            padding: 0 25%;
        }
    }
    @media only screen and (max-width: 425px) {
        .next{
            background-color: #000;
            width: 60px;
            height: 60px;
            top: 3%;
            right: -20%;
            border: 0;
            position: absolute;
            border-radius: 50%;
            transition: .5s;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 999;
        }
        .next.on{
            transform: translateX(-10rem);
        }
        .parte-1.on{
            img.hearts-img{
                width: 6rem;
                object-fit: contain;
            }
            .mensagens{
                width: 90vw;
            }
            .mensagens.on{
                scale: 1;
                .imgs{
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    flex: 2;
                    img{
                        flex: 1;
                        width: 60%;
                        height: 18rem;
                        /* object-fit: cover; */
                    }
                }
                p{
                    color: #000;
                    font-size: 2rem;
                    width: 100%;
                    text-align: center;
                }
                &.troca{
                    animation: bugug 1s ease;
                }
            }
        }
        .hearts{
            align-items: center;
            justify-content: center;
            /* padding: 0 1rem; */
            ul{
                padding: 0;
                width: 90vw;
                /* display: flex; */
                gap: 0;
            }
            &.anime .flip-container{
                width: 2rem;
                height: 2rem;
            }
            
        }
        .parte-2.on{
            position: absolute;
            top: 0;
            /* background-color: blue; */
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            opacity: 1;
            /* transition: 1s; */
            .pt1, .pt2{
                position: absolute;
                padding: 0 5%;
            }
            .pt1, .pt2 p{
                font-size: 3.2rem;
                text-align: center;
            }
            .pt1{
                opacity: 0;
                transition: .5s;
            }
            .pt1.on{
                opacity: 1;
            }
            .pt1 h1{
                font-size: 6rem;
                margin-bottom: 4rem;
            }
            .pt2{
                opacity: 0;
                transition: .5s;
            }
            .pt2.on{
                opacity: 1;
            }
            .pt-final.on{
                flex: 3;
                display: flex;
                height: 100%;
                opacity: 1;
                transition: .2s;
                .left, .mid, .right{
                    flex: 1;
                }
                .left{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .foto:nth-child(1){
                        margin-left: -40rem;
                        transform: rotate(15deg);
                    } 
                    .foto.on:nth-child(1){
                        margin-left: 0;
                        transform: rotate(15deg);
                        /* transition: 5s; */
                    }
        
                    .foto:nth-child(2){
                        margin-left: -40rem;
                        transform: rotate(7deg);
                        transition-delay: .4s;
                    }
                    .foto.on:nth-child(2){
                        margin-left: 0;
                        transform: rotate(7deg);
                    }
        
                    .foto:nth-child(3){
                        margin-left: -40rem;
                        transform: rotate(-11deg);
                    }
                    .foto.on:nth-child(3){
                        margin-left: 0;
                        transform: rotate(-11deg);
                        transition-delay: .6s;
                    }
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .foto:nth-child(1){
                        margin-left: 120%;
                        transform: rotate(-15deg);
                    }
                    .foto.on:nth-child(1){
                        margin-left: 43%;
                        transform: rotate(-15deg);
                    }
        
                    .foto:nth-child(2){
                        margin-left: 120%;
                        transform: rotate(-7deg);
                    }
                    .foto.on:nth-child(2){
                        margin-left: 43%;
                        transform: rotate(-7deg);
                        transition-delay: .4s;
                    }
        
                    .foto:nth-child(3){
                        margin-left: 120%;
                        transform: rotate(11deg);
                    }
                    .foto.on:nth-child(3){
                        margin-left: 43%;
                        transform: rotate(11deg);
                        transition-delay: .6s;
                    }
                }


                .mid{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: -200%;
                    transition: 1s;
                }
                .mid.on{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    transition: 1s;
                    margin-top: 0;
                    .foto:nth-child(1){
                    }
                    .foto:nth-child(2) img{
                        height: 24rem;
                    }
                }
                .foto{
                    display: flex;
                    width: 24rem;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2rem 1.4rem 3rem 1.4rem;
                    background-color: #fff;
                    box-shadow: 5px 7px 4px 0px rgba(0, 0, 0, 0.25);
                    transition: 1s;
                    transition-delay: .5s;
                }
                .foto img{
                    width: 100%;
                    height: 16rem;
                    object-fit: cover;
                }
            }
            .pt-final{
                opacity: 0;
                flex: 3;
                display: flex;
                height: 100%;
                /* opacity: 1; */
                /* transition: 1s; */
                .left{

                    .foto:nth-child(1){
                        margin-left: -40rem;
                        transform: rotate(15deg);
                        transition: 1s;
                    } 
                    .foto.on:nth-child(1){
                        margin-left: 0;
                        transform: rotate(15deg);
                        /* transition: 5s; */
                    }
        
                    .foto:nth-child(2){
                        margin-left: -40rem;
                        transform: rotate(7deg);
                        transition-delay: .4s;
                    }
                    .foto.on:nth-child(2){
                        margin-left: 0;
                        transform: rotate(7deg);
                    }
        
                    .foto:nth-child(3){
                        margin-left: -40rem;
                        transform: rotate(-11deg);
                    }
                    .foto.on:nth-child(3){
                        margin-left: 0;
                        transform: rotate(-11deg);
                        transition-delay: .6s;
                    }
                }
                .right{
                    .foto:nth-child(1){
                        margin-left: 120%;
                        transform: rotate(-15deg);
                    }
                    .foto.on:nth-child(1){
                        margin-left: 43%;
                        transform: rotate(-15deg);
                    }
        
                    .foto:nth-child(2){
                        margin-left: 120%;
                        transform: rotate(-7deg);
                    }
                    .foto.on:nth-child(2){
                        margin-left: 43%;
                        transform: rotate(-7deg);
                        transition-delay: .4s;
                    }
        
                    .foto:nth-child(3){
                        margin-left: 120%;
                        transform: rotate(11deg);
                    }
                    .foto.on:nth-child(3){
                        margin-left: 43%;
                        transform: rotate(11deg);
                        transition-delay: .6s;
                    }
                }

                .mid{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    margin-top: -200%;
                    transition: 1s;
                }
                .mid.on{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    transition: 1s;
                    margin-top: 0;
                }
                .mid.on .foto:nth-child(1){
                }
                .mid.on .foto:nth-child(2){
                    /* height: 200px; */
                }
                .mid.on .foto:nth-child(2) img{
                    height: 100%;
                }
                .foto{
                    display: flex;
                    width: 230px;
                    flex-direction: column;
                    gap: 2rem;
                    padding: 2rem 1.4rem 3rem 1.4rem;
                    background-color: #fff;
                    box-shadow: 5px 7px 4px 0px rgba(0, 0, 0, 0.25);
                    transition: 1s;
                }
                .foto img{
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                
                
            }
        }
        .parte-2.off{
            display: none;
            opacity: 1;
            .pt1, .pt2{
                position: absolute;
                padding: 0 25%;
            }
        }
    }
`;

export const Flipper = styled.li`
    perspective: 1000px;
    border-radius: 5px;
    overflow: hidden;

    .flipper{
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.4s;
            transform-style: preserve-3d;
    }

    .front, 
    .back{
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        transition: .5s;
    }

    .flipper.on{
        transform: rotateY(180deg);
    }

    .flipper .front img{
        height: 100%;
    }
    
    .back{
	    transform: rotateY(180deg);
    }

    .flipper .back{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .flipper .back .back-container{
        /* background-color: red; */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid;
        width: 70%;
        height: 70%;
    }
    .flipper .back .back-container h1{
        font-size: 2.8rem;
    }
    
`
