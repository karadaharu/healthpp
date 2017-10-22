import xlrd, json
from gensim.scripts.glove2word2vec import glove2word2vec



def inner_product(word1, word2):
	'''This function take 2 letters and it compares them'''
	if word1 == word2 :
		#print(word1)
		return 1
	else:
		return 0

def prediction(list_score, score_max):
	'''this function predict the CPT code'''
	code = []
	for i in range(len(list_score)):
		if list_score[i] == score_max:
			code.append(i)
	return code


if __name__ == '__main__':

	physician_note = input().lower().split(" ")
	# open Excel file
	wb = xlrd.open_workbook('CPT_Code_List_Sample.xlsx')

	# Data lecture
	#test : code_cpt = [['kidney', 'failure'], ['kidney', 'disease'], ['blood', 'disease']]
	code_cpt = []
	sh = wb.sheet_by_name(u'Sheet1')
	for rownum in range(sh.nrows):
		code_cpt_cur = sh.row_values(rownum)[2].strip('.,?!:/;() ')
		code_cpt.append(code_cpt_cur.split(" "))

	#print(code_cpt)
	weights_code_physician_word = [[0] for i in range(len(code_cpt))]
	score_weights_code_physician_word = []
	for id_loop in range(len(code_cpt)):
		for id_cur_code in range(len(code_cpt[id_loop])):
			for id_physician_word in range(len(physician_note)):
				if inner_product(code_cpt[id_loop][id_cur_code], physician_note[id_physician_word]) == 1 & len(weights_code_physician_word[id_loop]) < 10:
					weights_code_physician_word[id_loop].append(1)

	for id_code in range(len(code_cpt)):
		score_weights_code_physician_word.append(sum(weights_code_physician_word[id_code]))
	score_total = sum(score_weights_code_physician_word)
	for id_score in range(len(score_weights_code_physician_word)):
		score_weights_code_physician_word[id_score] = score_weights_code_physician_word[id_score]/score_total

	#print(score_weights_code_physician_word)
	code_predict = prediction(score_weights_code_physician_word, max(score_weights_code_physician_word))
	for i in range(len(code_predict)):
		print(int(sh.row_values(code_predict[i])[0]))
