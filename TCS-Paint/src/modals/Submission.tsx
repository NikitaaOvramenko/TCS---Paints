interface SubmissionProps {
  bool: boolean;
  closeModal(): void;
}
export default function Submission({ bool, closeModal }: SubmissionProps) {
  return (
    <>
      {bool && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 flex z-50 items-center justify-center bg-black/50 
    transition duration-300 
    starting:opacity-0
    opacity-100 
    `}
        >
          <div className="bg-white p-6 rounded shadow-lg relative animate-fadeIn ">
            <h2 className="text-xl font-bold">Submitted</h2>
            <p>Thank you! we will get in touch with you shortly!</p>
          </div>
        </div>
      )}
    </>
  );
}
