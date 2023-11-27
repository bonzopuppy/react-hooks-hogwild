import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

function HogCard({ hog, hideHog }) {
    const [viewDetails, setViewDetails] = useState(false);

    const handleToggleDetails = () => {
        setViewDetails(!viewDetails);
    };

    const displayMedal = () => {
        if (hog.highestMedalAchieved === '') {
            return null;
        } else {
            return (
                <>
                    <strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]};
                </>
            );
        }
    }

    return (
        <Card>
            <Image src={hog.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
                <Card.Description>
                    {viewDetails && (
                        <div>
                            <strong>Specialty:</strong> {hog.specialty}<br />
                            <strong>Weight:</strong> {hog.weight}<br />
                            <strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}<br />
                            {displayMedal()}
                        </div>
                    )}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='blue' onClick={handleToggleDetails}>
                        {viewDetails ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Button basic color='red' onClick={() => hideHog(hog.id)}>
                        Hide Hog
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
}

export default HogCard;

