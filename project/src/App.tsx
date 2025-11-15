import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { ProblemForm } from './components/ProblemForm';
import { SuccessMessage } from './components/SuccessMessage';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmitClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onSubmitClick={handleSubmitClick} />
      <InfoSection />

      {showForm && (
        <ProblemForm onClose={handleFormClose} onSuccess={handleSuccess} />
      )}

      {showSuccess && <SuccessMessage onClose={handleSuccessClose} />}
    </div>
  );
}

export default App;
