import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Finanzas from "./Finanzas";

configure({ adapter: new Adapter() });

describe("Finanzas", () => {
  it("llama a eliminar finanza onClick", () => {
    const finanzas = [
      {
        desc: "finanza 1",
        cant: 100,
      },
      {
        desc: "finanza 2",
        cant: 200,
      },
    ];
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );

    wrapper.find("button").at(0).simulate("click");
    expect(eliminarFinanza.mock.calls).toEqual([[0]]);

    const resultado = wrapper.text().includes("finanza 1");
    expect(resultado).toEqual(true);
  });
});
