import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <Fragment>
            <div>
                {
                    robots.map((user) => {
                        const { id, name, email } = user;
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                email={email}
                            />
                        );
                    })
                }
            </div>
        </Fragment>
    );
}

export default CardList;
