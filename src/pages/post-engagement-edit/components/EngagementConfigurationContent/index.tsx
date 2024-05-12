import { EngagementConfigType, EngagementConfigTypeMap } from '../EngagementConfigurationTab';
import AutoResponseSettings from './AutoResponseSettings';
import GeneralSettings from './GeneralSettings';

type Props = { type: EngagementConfigType };
export default function EngagementConfigurationContent({ type }: Props) {
  if (type === EngagementConfigTypeMap.general) return <GeneralSettings />;

  if (type === EngagementConfigTypeMap.autoResponse) return <AutoResponseSettings />;
}
