import { useParams } from 'react-router-dom';

export default function PostEngagementEdit() {
  const { postEngageId } = useParams();
  return <div>PostEngagementEdit {postEngageId}</div>;
}
