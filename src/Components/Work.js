import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoDeal = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
    ];

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How it Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nostrum, natus, ducimus libero expedita quaerat vel corporis dignissimos ut eos aspernatur dolorum sequi nisi esse at quis deleniti. Mollitia, blanditiis!
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoDeal.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <h2>{data.text}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work