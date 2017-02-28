import React from 'react';

const MainLayout = ({content ,topContent}) => {
    return (
        <div className="container--global">
            <header>
                {topContent}
            </header>

            <main>
                {content}
            </main>
        </div>
    )
}

export default MainLayout;