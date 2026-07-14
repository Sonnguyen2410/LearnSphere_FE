import { HomePage } from './pages/HomePage';
import { CourseCatalogPage } from './pages/CourseCatalogPage';
import { DashboardPage } from './pages/DashboardPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

export default function App() {
  const pathname = window.location.pathname;

  if (pathname === '/dashboard') {
    return <DashboardPage />;
  }

  if (pathname === '/courses') {
    return <CourseCatalogPage />;
  }

  if (pathname === '/lesson-detail') {
    return <LessonDetailPage />;
  }

  if (pathname === '/login') {
    return <LoginPage />;
  }

  if (pathname === '/signup') {
    return <SignupPage />;
  }

  return <HomePage />;
}
