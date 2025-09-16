'use client'
import React, { useState } from 'react';
import './PlanoViagem.css';
import { plannerSteps } from '@/app/model/data/PlanoViagem';


export default function PlanoViagem() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="planner-container">
      <div className="planner-image-wrapper">
        <img 
          src="/veneza02.jpg" 
          alt="Veneza, Itália" 
          className="planner-image"
        />
      </div>

      <div className="planner-content">
        <h1 className="planner-title">Planejamos tudo para você</h1>
        <p className="planner-subtitle">
           Planejamos tudo para você aproveitar as melhores viagens no seu país dos sonhos, com conforto e exclusividade!
        </p>

        <div className="steps-list">
          {plannerSteps.map((step, index) => (
            <div
              key={index}
              className={`step-item ${activeStep === index ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <div className="step-text-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}