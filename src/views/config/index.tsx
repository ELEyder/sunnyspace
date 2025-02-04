import styles from './index.module.css';
import FormConfig from '../../components/FormConfig/FormConfig';

export default function Config() {
  return (
    <section className={styles.configuration}>
      <FormConfig />
    </section>
  )
} 