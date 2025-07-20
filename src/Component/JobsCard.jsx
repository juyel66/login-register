import React from 'react';

const JobsCard = ({job}) => {
    const {maximumPrice,jobCategory, jobBannerUrl} = job
    return (
        <div>
            price: {maximumPrice}
            Category: {jobCategory}
            <img src={jobBannerUrl} alt="" />
            
        </div>
    );
};

export default JobsCard;