import { error } from '../../../../../types';

interface PreviewState {
  preview: Blob | null;
  error: error;
  isSuccessSaveFinal: boolean | undefined;
  finalPdf: Blob | null;
}

export default PreviewState;
