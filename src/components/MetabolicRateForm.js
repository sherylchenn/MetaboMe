import React, { useState } from 'react';

function CaloricFlow() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');

    const calculateRMR = () => {
        // Mifflin-St Jeor Calculation
        let s = gender === "male" ? 5 : -161;
        let RMR = (10 * weight) + (625 * height) - (5 * age) + s;
        return RMR;
    };

    const getActivityMultiplier = () => {
        switch(activityLevel) {
            case 'sedentary': return 1.2;
            case 'lightly_active': return 1.375;
            case 'moderately_active': return 1.55;
            case 'very_active': return 1.725;
            case 'super_active': return 1.9;
            default: return 1;
        }
    };

    const calculateTDEE = () => {
        const rmr = calculateRMR();
        return rmr * getActivityMultiplier();
    };
    
    return (
        <div>
            {/* Form */}
            <form onSubmit={e => e.preventDefault()}>
                {/* Weight */}
                <div>
                    <label>Weight (in kg): </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>

                {/* Height */}
                <div>
                    <label>Height (in m): </label>
                    <input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                {/* Age */}
                <div>
                    <label>Age: </label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>

                {/* Gender */}
                <div>
                    <label>Gender: </label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                {/* Activity Level */}
                <div>
                    <label>Activity Level: </label>
                    <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="lightly_active">Lightly active (light exercise/sports 1-3 days/week)</option>
                        <option value="moderately_active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                        <option value="very_active">Very active (hard exercise/sports 6-7 days a week)</option>
                        <option value="super_active">Super active (very hard exercise/sports & physical job)</option>
                    </select>
                </div>

                <button type="button" onClick={calculateTDEE}>Calculate</button>
            </form>

            {/* Results */}
            <div>
                <h2>Results:</h2>
                <p>RMR (Resting Metabolic Rate): {calculateRMR()} Cal/day</p>
                <p>TDEE (Total Daily Energy Expenditure): {calculateTDEE()} Cal/day</p>
            </div>
        </div>
    );
}

export default CaloricFlow;
