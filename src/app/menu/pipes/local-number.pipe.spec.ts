import { LocalNumberPipe } from './local-number.pipe';

describe('LocalNumberPipe', () => {
    it('create an instance', () => {
        const pipe = new LocalNumberPipe('fa-IR');
        expect(pipe).toBeTruthy();
    });
});
