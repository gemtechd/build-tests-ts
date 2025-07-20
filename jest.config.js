



module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/*.test.ts',
    '**/*.test.ts',
  ],
  moduleFileExtensions: ['ts', 'js'],
};

// module.exports = {
//   preset: 'ts-jest',                  // תומך ב-TS
//   testEnvironment: 'node',             // סביבה מבוססת Node.js (אופציונלי, תלוי בפרויקט)
//   testMatch: [
//     '**/tests/*.test.ts',            // חפש את הקבצים בתיקיית tests עם סיומת .test.ts
//     '**/*.test.ts',                  // חפש כל קובץ עם סיומת .test.ts
//   ],
//   moduleFileExtensions: ['ts', 'js'],
//   "compilerOptions": {
//     "types": ["jest", "node"]
//   }
//   // קובצי מודול ש-Jest תומך בהם
// };



// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   testMatch: [;
//     '**/tests/**/*.test.ts',  // תוודא שזה כולל את המיקום של קבצי הבדיקות שלך
//     '**/*.test.ts',
//     '**/*.spec.ts'
//   ],
//   moduleFileExtensions: ['ts', 'js'],
// };
