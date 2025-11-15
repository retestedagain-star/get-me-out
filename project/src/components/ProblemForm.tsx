import { useState } from 'react';
import { X } from 'lucide-react';

interface ProblemFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function ProblemForm({ onClose, onSuccess }: ProblemFormProps) {
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [excuse, setExcuse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setExcuse('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://rawstudio.app.n8n.cloud/webhook-test/31ce56b7-441c-4b40-b0e9-86bfda76b78c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          description,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      const data = await response.json();
      const excuseText = data.excuse || data.message || 'Your excuse has been generated!';
      setExcuse(excuseText);
      setDescription('');
      onSuccess();
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Describe your problem</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {excuse && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">Here is your excuse</h3>
              <p className="text-green-800 text-sm leading-relaxed">{excuse}</p>
            </div>
          )}

          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            placeholder="Tell us what's on your mind..."
            disabled={isSubmitting || !!excuse}
          />

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
            >
              {excuse ? 'Close' : 'Cancel'}
            </button>
            {!excuse && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
