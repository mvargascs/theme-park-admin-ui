import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

export const routeStubWithIdParam = { paramMap: of(convertToParamMap({ id: 'test' })) };
export const routeStubWithoutIdParam = { paramMap: of(convertToParamMap(null)) };