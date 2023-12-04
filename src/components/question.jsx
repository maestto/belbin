import React from 'react';
import * as Slider from '@radix-ui/react-slider';

import './question.css'

const Question = ({ questionText }) => {
    return (
        <div>
            <form className="Slider">
                <p className="SliderQuestion">{questionText}</p>
                <Slider.Root className="SliderRoot" defaultValue={[0]} max={100} step={10}>
                    <Slider.Track className="SliderTrack">
                        <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
                <div className="SliderScale">
                    {
                        Array.from({length: 10}, (_, i) => i + 1).map(i => (
                            <span key={i}>{i}</span>
                        ))
                    }
                </div>
            </form>
        </div>
    );
};

export default Question;