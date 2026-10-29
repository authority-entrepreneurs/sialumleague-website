import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';

export default function NotFound() {
  return (
    <Section variant="dark" title="Page Not Found" className="not-found">
      <p className="lead center">That page is out of bounds.</p>
      <div className="center">
        <Link to="/" className="btn btn-accent btn-lg">Back to Home</Link>
      </div>
    </Section>
  );
}
