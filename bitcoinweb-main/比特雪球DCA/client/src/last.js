import React from 'react';

function UserForum() {
    // 函數名稱改用駝峰式命名
    const scrollToUserForum = () => {
        // 使用 React 的 ref 來獲取 DOM 元素
        const forumElement = document.querySelector('.message');
        forumElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="message-container">
            <div className="message" onClick={scrollToUserForum}>用戶論壇</div>
            <fieldset>
                <h2>更多資訊</h2>
                <div className="block-blockchain">
                    <img className="blockchain" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E5%8D%80%E5%A1%8A%E9%8F%88.jpg?raw=true" alt="Blockchain" />
                    <a href="https://blockcast.it/">
                        <h1>幣圈資訊區</h1>
                    </a>
                </div>
                <div className="news-news">
                    <img className="news" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E9%8F%88%E6%96%B0%E8%81%9E.jpg?raw=true" alt="News" />
                    <a href="https://abmedia.io/">
                        <h1>幣圈新聞</h1>
                    </a>
                </div>
                <div className="invenst-invenst">
                    <img className="invenst" src="https://github.com/PeiHsiuLu/PeiHsiuLu/blob/main/%E6%AF%94%E7%89%B9%E5%B9%A3.jpg?raw=true" alt="Invest" />
                    <a href="https://www.okx.com/hk/join?channelId=ACE520352&msclkid=1f8ff8d5fc2e1938aaae9dbeb0138086">
                        <h1>我要投資</h1>
                    </a>
                </div>
            </fieldset>
        </div>
    );
}

export default UserForum;
