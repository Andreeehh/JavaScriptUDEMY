#include <iostream>
using namespace std;
typedef char TInfo;
typedef struct no {
 TInfo info;
 no *prox;
} TNo;
typedef TNo *PNo;
void criaFila(PNo *l) {
 *l = NULL;
}
void insereInicioFila(PNo *l, TInfo dado) {
 PNo p = (PNo)malloc(sizeof(TNo));
 p->info = dado;
 p->prox = *l;
 *l = p;
 cout << "Inserido: "<<dado<<endl;
}
void insereFimFila(PNo *l, TInfo dado){
 PNo p = (PNo)malloc(sizeof(TNo));
 p->info = dado;
 p->prox = NULL;
PNo q;
 if (*l) {
 q = *l;
 while (q->prox) {
 q = q->prox;
 }
 q->prox=p;
}else{
*l=p;
}
}

int eliminaFimFila(PNo *l, TInfo *dado){
PNo p;
PNo q;
if (*l) {
 q = *l;
 while (q->prox) {
 p = q;
 q = q->prox;
}
p->prox = NULL;
*dado = q->info;
free(q);

return 1;
}else{
return 0;
}
}


int eliminaInicioFila(PNo *l, TInfo *dado) {
 PNo p;
 if (*l) {
 p = *l;
 *dado = p->info;
 *l = p->prox;
 free(p);
 return 1;
 } else {
 return 0;
 }
}
int contaNosFila(PNo l) {
 PNo p;
 int n;
 n = 0;
 p = l;
 while (p) {
 n++;
 p = p->prox;
 }
 return n;
}
void mostraFila(PNo l) {
 cout << "Fila (" << contaNosFila(l) << "):";
 while (l) {
 cout << " " << l->info;
 l = l->prox;
 }
}
int mostraUltimoFila(PNo l, TInfo *dado) {
 PNo p;
 if (l) {
 p = l;
 while (p->prox) {
 p = p->prox;
 }
 *dado = p->info;
 return 1;
 } else {
 return 0;
 }
}
int mostraEnesimoFila(PNo l, int n, TInfo *dado) {
 PNo p;
 int i;
 p = l;
 i = 1;
 while (p && (i<n)) {
 p = p->prox;
 i++;
 }
 if (p) {
 *dado = p->info;
 return 1;
 } else {
 return 0;
 }
}
void terminaFila(PNo *l) {
 TInfo v;
 while (eliminaInicioFila(l, &v));
}
int main() {
 PNo Fila;
 TInfo valor;
 cout << endl << "Criando Fila...";
 criaFila(&Fila);
 cout << endl << "Criado!" << endl;
 cout << endl << "Inserindo Fila..."<<endl;
 insereInicioFila(&Fila, 'A');
 insereInicioFila(&Fila, 'B');
 insereInicioFila(&Fila, 'C');
 insereInicioFila(&Fila, 'D');
 cout << endl << "Inserido!" << endl;
 cout << endl << "Mostrando Fila..." << endl;
 mostraFila(Fila);
 cout << endl << "Mostrado!" << endl;
 cout << endl << "Excluindo valor da Fila..." << endl;
 if (eliminaFimFila(&Fila, &valor)) {
 cout << "Valor: " << valor;
 } else {
 cout << "Fila Vazia!";
 }
 cout << endl << "Excluido!" << endl;
 cout << endl << "Mostrando Fila..." << endl;
 mostraFila(Fila);
 cout << endl << "Mostrado!" << endl;

 cout << endl << "Terminando Fila...";
 terminaFila(&Fila);
 cout << endl << "Terminado!" << endl;
 cout << endl << "Mostrando Fila..." << endl;
 mostraFila(Fila);
 cout << endl << "Mostrado!" << endl;
 cout << endl << "*****" << endl;
 return 0;
}