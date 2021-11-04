import { error } from '../../../../../types';

interface PreviewState {
  preview: string;
  error: error;
  isSuccessSaveFinal: boolean | undefined;
  finalPdf: Blob | null;
}

export default PreviewState;
