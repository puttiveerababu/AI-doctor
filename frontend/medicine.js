// Mapping of diseases to recommended medicines
const diseaseMedicineMapping = {
  "common cold": "Paracetamol, Antihistamines, and Decongestants",
  flu: "Oseltamivir (Tamiflu), Paracetamol, and Ibuprofen",
  headache: "Ibuprofen, Aspirin, or Acetaminophen",
  "stomach ache": "Antacids, Pepto-Bismol, or Simethicone",
  allergies: "Antihistamines, Decongestants, or Corticosteroids",
  "sore throat": "Lozenges, Paracetamol, or Ibuprofen",
  fever: "Paracetamol or Ibuprofen",
  cough: "Dextromethorphan, Guaifenesin, or Cough suppressants",
  asthma: "Inhalers (e.g., Salbutamol), Steroids",
  "high blood pressure": "ACE inhibitors, Beta-blockers, Diuretics",
  diabetes: "Insulin, Metformin, Glibenclamide",
  cholesterol: "Statins, Fibrates",
  arthritis:
    "NSAIDs, Corticosteroids, Disease-modifying antirheumatic drugs (DMARDs)",
  depression: "Antidepressants (e.g., SSRIs, SNRIs, TCA)",
  anxiety: "Benzodiazepines, SSRIs",
  insomnia: "Melatonin, Benzodiazepine receptor agonists",
  "allergic rhinitis": "Antihistamines, Nasal Corticosteroids",
  sinusitis: "Decongestants, Nasal Steroids",
  bronchitis: "Antibiotics, Cough Syrups, Steroids",
  pneumonia: "Antibiotics, Antivirals, Steroids",
  tuberculosis: "Antitubercular drugs (e.g., Rifampin, Isoniazid)",
  "HIV/AIDS": "Antiretroviral therapy (ART)",
  hepatitis: "Antivirals, Interferon",
  gastroenteritis: "Oral Rehydration Salts (ORS), Anti-nausea drugs",
  eczema: "Topical Corticosteroids, Moisturizers",
  psoriasis: "Topical Corticosteroids, Phototherapy",
  acne: "Topical Retinoids, Benzoyl Peroxide",
  chickenpox: "Antihistamines, Calamine lotion",
  shingles: "Antiviral drugs (e.g., Acyclovir), Pain relievers",
  malaria:
    "Antimalarial drugs (e.g., Chloroquine, Artemisinin-based combination therapy)",
  tetanus: "Tetanus immunoglobulin, Antibiotics",
  meningitis: "Antibiotics, Antivirals",
  hepatitisC: "Antiviral drugs (e.g., Sofosbuvir, Ledipasvir)",
  livercirrhosis: "Liver transplant, Diuretics, Beta-blockers",
  gout: "Colchicine, NSAIDs, Allopurinol",
  "dengue fever": "Supportive care, Pain relievers (avoid NSAIDs)",
  typhoid: "Antibiotics (e.g., Ciprofloxacin)",
  "diabetic neuropathy": "Gabapentin, Pregabalin, Duloxetine",
  cancer: "Chemotherapy, Radiation, Immunotherapy",
  "skin cancer": "Surgical excision, Chemotherapy, Radiotherapy",
  Migraine: "Sumatriptan, Beta-blockers",
  "Motion Sickness": "Dimenhydrinate",
  "Chronic Bronchitis": "Inhalers, Steroids",
  Gastritis: "Antacids, Proton Pump Inhibitors",
  Sciatica: "Pain Relievers, Physical Therapy",
  Tonsillitis: "Antibiotics, Fluids, Rest",
  "Morning Sickness": "Ginger, Vitamin B6",
  "Iron Deficiency": "Iron Supplements",
  "Panic Disorder": "Cognitive Therapy, SSRIs",
  "Sleep Apnea": "CPAP Machine, Lifestyle Changes",
  Dermatitis: "Topical Steroids, Antihistamines",
  "Respiratory Infection": "Antivirals, Antibiotics, Rest",
  "Heat Exhaustion": "Hydration, Rest, Cooling Measures",
  "Tension Headache": "Relaxation Techniques, NSAIDs",
  "Menstrual Cramps": "Pain Relievers, Heat Therapy",
  "Coronary Artery Disease": "Nitroglycerin, Aspirin, Beta-blockers",
  "Thyroid Disorder": "Levothyroxine, Antithyroid Medications",
  "Chronic Fatigue Syndrome":
    "Rest, Lifestyle Changes, Cognitive Behavioral Therapy",
  "Anxiety Disorder": "Therapy, Benzodiazepines, SSRIs",
  "Rheumatoid Arthritis": "NSAIDs, DMARDs, Biologics",
  Hypothyroidism: "Levothyroxine",
  Hyperthyroidism: "Antithyroid Medications, Beta-blockers",
  Osteoporosis: "Bisphosphonates, Calcium, Vitamin D",
  "Urinary Tract Infection (UTI)":
    "Antibiotics (e.g., Nitrofurantoin, Trimethoprim)",
  "Kidney Stones": "Pain Relievers, Hydration, Surgery",
  "Peptic Ulcer": "Proton Pump Inhibitors, Antibiotics",
  Hemorrhoids: "Topical Creams, Fiber Supplements, Surgery",
  Conjunctivitis: "Antibiotic Eye Drops, Antihistamines",
  "Otitis Media (Ear Infection)": "Antibiotics, Pain Relievers",
  "Varicose Veins": "Compression Stockings, Surgery",
  Obesity: "Diet, Exercise, Medications (e.g., Orlistat)",
  "Alzheimer's Disease": "Cholinesterase Inhibitors, Memantine",
  "Parkinson's Disease": "Levodopa, Dopamine Agonists",
  Epilepsy: "Anticonvulsants (e.g., Carbamazepine, Valproate)",
  "Multiple Sclerosis": "Disease-modifying Therapies, Steroids",
  Lupus: "NSAIDs, Corticosteroids, Immunosuppressants",
  Fibromyalgia: "Pain Relievers, Antidepressants, Physical Therapy",
  "Chronic Kidney Disease": "Dialysis, Kidney Transplant, Medications",
  "Heart Failure": "ACE Inhibitors, Beta-blockers, Diuretics",
  "Atrial Fibrillation": "Anticoagulants, Rate Control Medications",
  Stroke: "Thrombolytics, Anticoagulants, Rehabilitation",
  "Peripheral Artery Disease": "Statins, Antiplatelet Drugs, Surgery",
  "Celiac Disease": "Gluten-free Diet, Nutritional Supplements",
  "Irritable Bowel Syndrome (IBS)":
    "Dietary Changes, Antispasmodics, Probiotics",
  "Crohn's Disease": "Anti-inflammatory Drugs, Immunosuppressants",
  "Ulcerative Colitis": "Aminosalicylates, Corticosteroids, Biologics",
  Diverticulitis: "Antibiotics, Pain Relievers, Dietary Changes",
  Appendicitis: "Antibiotics, Surgery",
  Gallstones: "Pain Relievers, Surgery",
  Pancreatitis: "Pain Relievers, IV Fluids, Surgery",
  Gout: "Colchicine, NSAIDs, Allopurinol",
  Osteoarthritis: "NSAIDs, Physical Therapy, Joint Replacement",
  "Rheumatic Fever": "Antibiotics, Anti-inflammatory Drugs",
  Endometriosis: "Hormonal Therapy, Pain Relievers, Surgery",
  "Polycystic Ovary Syndrome (PCOS)":
    "Hormonal Therapy, Metformin, Lifestyle Changes",
  "Premenstrual Syndrome (PMS)":
    "Pain Relievers, Hormonal Therapy, Lifestyle Changes",
  "Erectile Dysfunction":
    "Phosphodiesterase Inhibitors (e.g., Sildenafil), Hormonal Therapy",
  "Benign Prostatic Hyperplasia (BPH)":
    "Alpha-blockers, 5-alpha Reductase Inhibitors, Surgery",
  Prostatitis: "Antibiotics, Alpha-blockers, Pain Relievers",
  "Sexually Transmitted Infections (STIs)":
    "Antibiotics, Antivirals, Antifungals",
  Infertility: "Fertility Drugs, Assisted Reproductive Technologies",
  Menopause: "Hormone Replacement Therapy, Lifestyle Changes",
  Osteopenia: "Calcium, Vitamin D, Bisphosphonates",
  Scoliosis: "Bracing, Physical Therapy, Surgery",
  "Carpal Tunnel Syndrome": "Splinting, Corticosteroid Injections, Surgery",
  "Tennis Elbow": "Rest, Physical Therapy, Corticosteroid Injections",
  "Plantar Fasciitis": "Stretching, Orthotics, Corticosteroid Injections",
  Bursitis: "Rest, NSAIDs, Corticosteroid Injections",
  Tendinitis: "Rest, Physical Therapy, NSAIDs",
  "Sprains and Strains": "Rest, Ice, Compression, Elevation (RICE), NSAIDs",
  Fractures: "Immobilization, Surgery, Pain Relievers",
  Concussion: "Rest, Pain Relievers, Monitoring",
  "Post-traumatic Stress Disorder (PTSD)": "Therapy, SSRIs, Benzodiazepines",
  "Bipolar Disorder": "Mood Stabilizers, Antipsychotics, Therapy",
  Schizophrenia: "Antipsychotics, Therapy, Social Support",
  "Obsessive-Compulsive Disorder (OCD)": "SSRIs, Therapy",
  "Attention Deficit Hyperactivity Disorder (ADHD)":
    "Stimulants, Non-stimulants, Therapy",
  "Autism Spectrum Disorder": "Behavioral Therapy, Speech Therapy, Medications",
  "Eating Disorders": "Therapy, Nutritional Support, Medications",
  "Substance Abuse": "Detoxification, Therapy, Medications",
  Alcoholism: "Detoxification, Therapy, Medications (e.g., Naltrexone)",
  "Smoking Cessation":
    "Nicotine Replacement Therapy, Medications (e.g., Bupropion)",
  "Opioid Addiction": "Medications (e.g., Methadone, Buprenorphine), Therapy",
  "Chronic Pain": "Pain Relievers, Physical Therapy, Nerve Blocks",
  Fibromyalgia: "Pain Relievers, Antidepressants, Physical Therapy",
  "Lyme Disease": "Antibiotics, Pain Relievers",
  Rabies: "Vaccination, Immunoglobulin",
  Tetanus: "Vaccination, Antibiotics",
  "Yellow Fever": "Supportive Care, Vaccination",
  "Zika Virus": "Supportive Care, Prevention",
  "Ebola Virus": "Supportive Care, Experimental Treatments",
  "COVID-19": "Antivirals, Steroids, Oxygen Therapy",
  Influenza: "Antivirals, Pain Relievers, Rest",
  "Common Cold": "Decongestants, Antihistamines, Rest",
};

// Function to get medicine recommendation based on condition
function getMedicineRecommendation(condition) {
  const medicine = diseaseMedicineMapping[condition.toLowerCase()];
  return medicine
    ? `For ${condition}, we recommend ${medicine}.`
    : "No specific recommendation available for this condition.";
}

// Handle Medicine Recommendation Form Submission
document
  .getElementById("medicineForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const condition = document.getElementById("condition").value.trim();

    if (!condition) {
      alert("Please enter a disease or condition.");
      return;
    }

    const medicine = getMedicineRecommendation(condition);
    document.getElementById("medicineResult").innerHTML = medicine;
  });
