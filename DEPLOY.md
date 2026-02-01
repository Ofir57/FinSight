# מדריך העלאה ל-GitHub Pages

## שלב 1: יצירת חשבון GitHub

1. היכנס ל-[github.com](https://github.com)
2. לחץ על **Sign up** וצור חשבון חדש
3. אשר את האימייל

## שלב 2: יצירת Repository חדש

1. לחץ על **+** בפינה הימנית העליונה
2. בחר **New repository**
3. הגדרות:
   - **Repository name**: `finance-dashboard` (או כל שם אחר)
   - **Description**: אפליקציית ניהול פיננסי אישי
   - **Public**: ✓ (חייב להיות ציבורי ל-GitHub Pages חינמי)
   - **Add a README file**: ❌ לא לסמן
4. לחץ **Create repository**

## שלב 3: העלאת הקבצים

### אפשרות א': דרך הדפדפן (פשוט)

1. בעמוד ה-Repository, לחץ על **uploading an existing file**
2. גרור את כל תיקיית הפרויקט לחלון
3. כתוב הודעה: "Initial upload"
4. לחץ **Commit changes**

### אפשרות ב': דרך Git (מומלץ)

```bash
# התקן Git אם לא מותקן
# Windows: https://git-scm.com/download/win
# Mac: brew install git

# פתח טרמינל בתיקיית הפרויקט
cd "/Users/s/Desktop/finance dashboard"

# אתחל Git
git init

# הוסף את כל הקבצים
git add .

# צור commit
git commit -m "Initial commit"

# הגדר את ה-remote (החלף USERNAME בשם המשתמש שלך)
git remote add origin https://github.com/USERNAME/finance-dashboard.git

# העלה
git branch -M main
git push -u origin main
```

## שלב 4: הפעלת GitHub Pages

1. בעמוד ה-Repository, לחץ על **Settings**
2. בתפריט הצד, לחץ על **Pages**
3. תחת **Source**, בחר:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. לחץ **Save**
5. המתן כ-2-5 דקות

## שלב 5: גישה לאפליקציה

הכתובת תהיה:
```
https://USERNAME.github.io/finance-dashboard/
```

החלף `USERNAME` בשם המשתמש שלך ב-GitHub.

---

## עדכון נתונים חודשי

כדי לעדכן את נתוני הקרנות:

### 1. עדכון קובץ הנתונים

ערוך את הקבצים:
- `data/mygemel-funds.js` - נתוני iGemel
- `data/market-funds.js` - נתוני TheMarker

### 2. עדכון גרסה

ערוך את `js/data-updates.js` ועדכן את הגרסאות:
```javascript
versions: {
    igemel: '2026-01',  // שנה לחודש הנוכחי
    themarket: '2026-01',
    app: '1.0.0'
}
```

### 3. העלאת העדכון

```bash
git add .
git commit -m "עדכון נתונים ינואר 2026"
git push
```

---

## פתרון בעיות

### האתר לא עולה
- ודא שה-Repository הוא **Public**
- ודא שבחרת את ה-branch הנכון בהגדרות Pages
- המתן עד 5 דקות

### שגיאת 404
- ודא שיש קובץ `index.html` בתיקיה הראשית
- ודא שהנתיב בכתובת נכון

### הנתונים לא מתעדכנים
- נקה cache בדפדפן (Ctrl+Shift+R)
- עדכן את גרסת ה-Service Worker ב-`sw.js`

---

## אבטחה

⚠️ **חשוב לדעת:**
- הנתונים האישיים נשמרים **בדפדפן של כל משתמש**
- הקוד גלוי לכולם (Open Source)
- אל תכלול מידע רגיש בקבצי הנתונים

---

## תמיכה

לשאלות נוספות, פתח Issue ב-GitHub Repository.
