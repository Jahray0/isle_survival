interface ProgressBarProps {
  percentage: number; // Pourcentage de progression (0-100)
  color: string; // Couleur de la barre
}

function ProgressBar({ percentage, color }: ProgressBarProps) {
  // Assurez-vous que le pourcentage est compris entre 0 et 100
  const validPercentage = Math.max(0, Math.min(100, percentage));

  // Créez une chaîne de style pour définir la largeur de la barre
  const barStyle = {
    width: `${validPercentage}%`,
    backgroundColor: color,
  };
  return (
    <div>
      <div className="w-full h-4 mb-2 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="h-4 bg-blue-600 rounded-full dark:bg-blue-500"
          style={barStyle}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
