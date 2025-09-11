import * as SingleNodeK8s       from './CodeAndInputSingleNodeK8s'
import * as ThreeNodeK8s        from './CodeAndInputThreeNodeK8s'
import * as CrushedNodeK8s      from './CodeAndInputCrushedNodeK8s'
import * as SingleNodeKubeApi   from './CodeAndInputSingleNodeKubeApi'
import * as ThreeNodeKubeApi    from './CodeAndInputThreeNodeKubeApi'
import * as CrushedNodeKubeApi  from './CodeAndInputCrushedNodeKubeApi'
import * as ThreeNodeKubeApiGardener  from './CodeAndInputThreeNodeKubeApiGardener'

export const SingleNodeFunctionsK8s = {
  ...SingleNodeK8s
}

export const ThreeNodeFunctionsK8s = {
  ...ThreeNodeK8s
}

export const CrushedNodeFunctionsK8s = {
  ...CrushedNodeK8s
}

export const SingleNodeFunctionsKubeApi = {
  ...SingleNodeKubeApi
}

export const ThreeNodeFunctionsKubeApi = {
  ...ThreeNodeKubeApi
}

export const CrushedNodeFunctionsKubeApi = {
  ...CrushedNodeKubeApi
}

export const ThreeNodeFunctionsKubeApiGardener = {
  ...ThreeNodeKubeApiGardener
}
